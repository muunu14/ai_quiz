import {NextResponse}from "next/server"
export async function POST (request:Request){
  try{
    return NextResponse.json({messge:'User created successfully'},{status:201})
  }
  catch
    (error){'error is definedbut never used.'
      return new Response ('Error creating user',{status:500})
    }
  }
