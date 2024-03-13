import mailer from "@/lib/mailer/mailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
  const data = await request.json();
  if(!data) throw "No data"
  console.log(data);
  try {
    const res = await mailer({receiver:data.email,data})

    if(res) return NextResponse.json({ message: "success" },{status:200})
    
    
  } catch (error) {
    
      return NextResponse.json({ message: "error",error }, { status: 500 });
  }
}
