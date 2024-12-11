import { auth } from "@/auth";
import SearchForm from "@/components/SearchForm";
import StartupCard, { type StartupCardType } from "@/components/StartupCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const { query } = await searchParams;
  const params = { search: query || null };

  const session = await auth();

  const { data } = (await sanityFetch({
    query: STARTUPS_QUERY,
    params,
  })) as unknown as { data: StartupCardType[] };

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup
          <br />
          Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search result for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {data?.length > 0 ? (
            data.map((post) => <StartupCard key={post?._id} {...post} />)
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>

      <SanityLive />
    </>
  );
}
