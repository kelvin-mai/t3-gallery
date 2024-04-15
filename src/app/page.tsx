import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/dfe57453-0c7a-42b5-a080-f8b141b19427-mletr9.png",
  "https://utfs.io/f/02829c9b-5b0b-454b-95a1-50d5e9c4f6f2-ke09p4.png",
  "https://utfs.io/f/be9831d9-1d4b-43c8-a5c2-a2b806d301e4-asiuhe.png",
  "https://utfs.io/f/02feaae1-6e77-4dfc-8176-72c6ee2c14d5-mletra.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {mockImages.map((img) => (
          <div key={img.id} className="w-48">
            <img src={img.url} alt="image" />
          </div>
        ))}
        Hello (gallery in progress)
      </div>
    </main>
  );
}
