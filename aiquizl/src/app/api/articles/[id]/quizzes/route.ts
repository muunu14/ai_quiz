import { NextResponse } from "next/server";
const articles = [
  {
    id: "1",
    title: "Article 1",
    summary: "Summary 1",
    content: "Content 1",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Article 2",
    summary: "Summary 2",
    content: "Content 2",
    createdAt: new Date().toISOString(),
  },
];
export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const article = articles.find((a) => a.id === params.id);
    if (!article) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 });
    }
    return NextResponse.json(article);
  } catch (err) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
