import {
  RouteSectionProps,
  useLocation,
  useSearchParams,
} from "@solidjs/router";
import Counter from "~/components/Counter";

export default function Product(props: RouteSectionProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  return (
    <div>
      <h1>Product {props.params.id}</h1>
      <p>This is the product page for product {props.params.id}.</p>

      <Counter />

      <pre data-test="sort">Sort: {searchParams.sort || "none"}</pre>

      <button
        disabled={searchParams.sort === undefined}
        onClick={() => setSearchParams({ sort: undefined })}
      >
        Sort by none
      </button>
      <br />
      <button
        disabled={searchParams.sort === "rating"}
        onClick={() => setSearchParams({ sort: "rating" })}
      >
        Sort by rating
      </button>
      <br />
      <button
        disabled={searchParams.sort === "relevance"}
        onClick={() => setSearchParams({ sort: "relevance" })}
      >
        Sort by relevance
      </button>

      <pre data-test="location">Location: {location.pathname}</pre>
    </div>
  );
}
