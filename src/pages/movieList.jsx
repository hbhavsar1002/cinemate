import { useSearchParams } from "react-router-dom";
import { MovieCard } from "../components/movieCard";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

export const MovieList = ({ apiPath, title }) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const { data: movies } = useFetch(apiPath, query);

  useTitle(title,query)

  return (
    <main className="mt-10">
      {query && (
        <section className="py-7">
          <p className="text-3xl text-gray-700 dark:text-white">
            {movies.length === 0
              ? `No result found for '${query}'`
              : `Results for '${query}'`}
          </p>
        </section>
      )}

      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
