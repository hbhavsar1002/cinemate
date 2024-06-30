import { MovieCard } from "../components/movieCard";
import { useFetch } from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")
  const { data: movies } = useFetch(apiPath,query);
  
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
