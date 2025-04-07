import { getMessages, setRequestLocale } from "next-intl/server";

type PostParams = {
  title: string;
  description: string;
};

export default async function Blog({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const awaitedParams = await params;
  const locale = awaitedParams.locale;
  setRequestLocale(locale);
  const messages = await getMessages();
  const postPreviews: PostParams[] = messages.postPreviews;

  const lg_screen_width = "lg:w-[75vw]";
  const default_screen_width = "w-[85vw]";

  return (
    <div className="caret-transparent w-screen py-20 lg:py-40 min-h-[100vh]">
      <div
        className={`${lg_screen_width} ${default_screen_width} container mx-auto flex flex-col gap-14`}
      >
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {postPreviews.map((post: PostParams, index:number) => {
            {/* Individual Post */}
            return (
              <div key={index} className="flex cursor-pointer flex-col gap-2 hover:opacity-75">
                <div className="mb-4 aspect-video rounded-md bg-muted"></div>
                <h3 className="text-xl tracking-tight">{post.title}</h3>
                <p className="text-base text-muted-foreground">
                  {post.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
