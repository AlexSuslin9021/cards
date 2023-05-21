import { useAppSelector } from "app/store";

const max = useAppSelector((state) => state.pack.queryParams.max);

export { max };
