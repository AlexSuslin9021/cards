import { instance } from "common/api";

export const packsApi = {
  register(arg: ParamsType) {
    return instance.get(`/cards/pack/${arg.page}${arg.pageCount}`);
  },
};

type ParamsType = {
  packName?: "?packName=english";
  min?: " &min=3";
  max?: "&max=9";
  sortPacks?: "&sortPacks=0updated";
  page?: "&page=1";
  pageCount?: "&pageCount=4";
  id?: "&user_id=5eb543f6bea3ad21480f1ee7";
  // чьи колоды не обязательно, или придут все
  block?: "&block=true";
};
