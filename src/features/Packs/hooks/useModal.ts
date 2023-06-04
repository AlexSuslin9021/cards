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
  const onClickUpdate = () => {
    dispatch(packsThunks.updatePackTC({ cardsPack: { _id: id, name: value, deckCover: file } }));
  };
  const onClickAddModal = () => {
    dispatch(packsThunks.addPacksTC({ cardsPack: { name: value, deckCover: file } }));
    setValue("");
  };
  const onClickDeleteModal = () => {
    dispatch(packsThunks.removePackTC(id));
  };

  return {
    onClickDeleteModal,
    value,
    setValue,
    file,
    onChangeHandler,
    onClickUpdate,
    setFile,
    onClickAddModal,
  };
};
