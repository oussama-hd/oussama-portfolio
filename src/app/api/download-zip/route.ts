import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import JSZip from "jszip";

function addDirectoryToZip(zip: JSZip, localPath: string, zipPath = "") {
  const items = fs.readdirSync(localPath);

  for (const item of items) {
    if (
      item === "node_modules" ||
      item === ".next" ||
      item === ".git" ||
      item === ".env" ||
      item === ".env.local" ||
      item.startsWith(".next") ||
      item === ".turbo" ||
      item === "dist" ||
      item === "build"
    ) {
      continue;
    }

    const fullPath = path.join(localPath, item);
    const entryZipPath = zipPath ? `${zipPath}/${item}` : item;
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      const folder = zip.folder(entryZipPath);
      if (folder) {
        addDirectoryToZip(zip, fullPath, entryZipPath);
      }
    } else {
      if (stat.size < 10 * 1024 * 1024) {
        const fileContent = fs.readFileSync(fullPath);
        zip.file(entryZipPath, fileContent);
      }
    }
  }
}

export async function GET() {
  try {
    const rootDir = process.cwd();
    const zip = new JSZip();

    addDirectoryToZip(zip, rootDir, "");

    const zipBuffer = await zip.generateAsync({
      type: "nodebuffer",
      compression: "DEFLATE",
      compressionOptions: { level: 6 },
    });

    return new Response(zipBuffer as unknown as BodyInit, {
      status: 200,
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": 'attachment; filename="mohammadi-oussama-portfolio.zip"',
        "Cache-Control": "no-cache",
      },
    });
  } catch (error) {
    console.error("Failed to generate zip file:", error);
    return NextResponse.json(
      { success: false, error: "Failed to generate zip" },
      { status: 500 }
    );
  }
}
