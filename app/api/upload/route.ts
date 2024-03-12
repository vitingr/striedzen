import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";
          
cloudinary.config({ 
  cloud_name: 'djwne0azq', 
  api_key: '132249544478395', 
  api_secret: '8hIccMkd7tjzIjWt5SGct28s_Mw' 
});

export async function POST(request: Request) {
  const { path } = await request.json();

  if (!path) {
    return NextResponse.json({ message: "ERRO! Falta a o caminho da imagem" }, { status: 400 });
  }

  try {
    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
      transformation: [{ width: 512, height: 512, crop: "scale" }],
    };

    const result = await cloudinary.uploader.upload(path, options);

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "ERRO! Não foi possível fazer o upload da imagem" }, { status: 500 });
  }
}