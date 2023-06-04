import { ChangeEvent, useState } from "react";
import { useAppDispatch } from "common/hooks";
import { packsThunks } from "features/Packs/pack.slice";

export const useModal = (name: string, deckCover: any, id: string) => {
  const [value, setValue] = useState<string>(name);
  const [file, setFile] = useState(deckCover);
  const dispatch = useAppDispatch();
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  const onClickHandler = () => {
    dispatch(packsThunks.updatePackTC({ cardsPack: { _id: id, name: value, deckCover: file } }));
  };

  return {
    value,
    setValue,
    file,
    onChangeHandler,
    onClickHandler,
    setFile,
    // onClickAddModal
  };
};
