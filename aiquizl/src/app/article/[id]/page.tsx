// "use client";

// import { useEffect, useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { ArrowLeft, BookOpen, FileText, Maximize2 } from "lucide-react";

// interface Article {
//   id: string;
//   title: string;
//   content: string;
//   summary: string;
//   createdAt: string;
// }

// export default function ArticleDetailPage() {
//   const params = useParams();
//   const router = useRouter();
//   const [article, setArticle] = useState<Article | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchArticle = async () => {
//       try {
//         const response = await fetch(`/api/articles/${params.id}`);
//         const data = await response.json();
//         setArticle(data);
//       } catch (error) {
//         console.error("Error fetching article:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchArticle();
//   }, [params.id]);

//   const handleGoBack = () => {
//     router.back();
//   };

//   const handleTakeQuiz = () => {
//     router.push(`/quiz/${params.id}`);
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen p-8 bg-gray-50">
//         <Card className="w-full max-w-md">
//           <CardContent className="pt-6">
//             <div className="text-center">Loading...</div>
//           </CardContent>
//         </Card>
//       </div>
//     );
//   }

//   if (!article) {
//     return (
//       <div className="flex items-center justify-center min-h-screen p-8 bg-gray-50">
//         <Card className="w-full max-w-md">
//           <CardContent className="pt-6">
//             <div className="text-center">Article not found</div>
//           </CardContent>
//         </Card>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen p-8 bg-gray-50">
//       <div className="max-w-3xl mx-auto">
//         <div className="flex items-center justify-between mb-6">
//           <Button
//             variant="outline"
//             onClick={handleGoBack}
//             className="flex items-center gap-2"
//           >
//             <ArrowLeft className="w-4 h-4" />
//             Back
//           </Button>
//         </div>

//         <Card className="mb-6">
//           <CardHeader>
//             <CardTitle className="text-3xl">{article.title}</CardTitle>
//             <CardDescription>
//               Created on {new Date(article.createdAt).toLocaleDateString()}
//             </CardDescription>
//           </CardHeader>
//           <CardContent className="space-y-6">
//             <div className="space-y-2">
//               <h3 className="flex items-center gap-2 text-lg font-semibold">
//                 <BookOpen className="w-5 h-5" />
//                 Summary
//               </h3>
//               <Card className="bg-muted">
//                 <CardContent className="p-4">
//                   <p>{article.summary}</p>
//                 </CardContent>
//               </Card>
//             </div>

//             <div className="space-y-2">
//               <div className="flex items-center justify-between">
//                 <h3 className="flex items-center gap-2 text-lg font-semibold">
//                   <FileText className="w-5 h-5" />
//                   Full Article
//                 </h3>
//                 <Dialog>
//                   <DialogTrigger asChild>
//                     <Button
//                       variant="outline"
//                       size="sm"
//                       className="flex items-center gap-2"
//                     >
//                       <Maximize2 className="w-4 h-4" />
//                       View Full Article
//                     </Button>
//                   </DialogTrigger>
//                   <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
//                     <DialogHeader>
//                       <DialogTitle>{article.title}</DialogTitle>
//                       <DialogDescription>
//                         Created on{" "}
//                         {new Date(article.createdAt).toLocaleDateString()}
//                       </DialogDescription>
//                     </DialogHeader>
//                     <div className="prose max-w-none">
//                       <p className="whitespace-pre-wrap">{article.content}</p>
//                     </div>
//                   </DialogContent>
//                 </Dialog>
//               </div>
//               <Card className="bg-muted">
//                 <CardContent className="p-4">
//                   <p className="line-clamp-4">{article.content}</p>
//                 </CardContent>
//               </Card>
//             </div>
//           </CardContent>
//           <CardFooter className="flex justify-between">
//             <Button variant="outline" onClick={handleGoBack}>
//               Back to Articles
//             </Button>
//             <Button onClick={handleTakeQuiz}>Take Quiz</Button>
//           </CardFooter>
//         </Card>
//       </div>
//     </div>
//   );
// }
// src/app/api/articles/[id]/route.ts
import { NextResponse } from "next/server";

// Dummy data for example
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
