import getPosts from "@/lib/fetchAllPosts";

export async function GET(request) {
console.log(request, "request");
const posts = await getPosts();
return new Response(JSON.stringify(posts), {
  status: 200,
});
}

// export async function POST(request) {}

// export async function PUT(request) {}

// export async function DELETE(request) {}

// export async function PATCH(request) {}