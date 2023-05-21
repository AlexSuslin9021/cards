import { useAppSelector } from "app/store";

const pack = useAppSelector((state) => state.pack.packList.cardPacks);
const myId = useAppSelector((state) => state.auth.profile?._id);
const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
const page = useAppSelector((state) => state.pack.queryParams.page);
const max = useAppSelector((state) => state.pack.queryParams.max);
const min = useAppSelector((state) => state.pack.queryParams.min);
const pageCount = useAppSelector((state) => state.pack.queryParams.pageCount);
const user_id = useAppSelector((state) => state.pack.queryParams.user_id);
const sortPacks = useAppSelector((state) => state.pack.queryParams.sortPacks);
const packName = useAppSelector((state) => state.pack.queryParams.packName);

export { pack, myId, isLoggedIn, page, max, min, pageCount, user_id, sortPacks, packName };
