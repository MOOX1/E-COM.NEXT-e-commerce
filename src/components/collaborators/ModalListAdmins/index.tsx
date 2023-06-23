import Modal from '@/components/atoms/Modal';
import { IAdminInDataBase } from '@/types/admins';
import { useState } from 'react';
import ConfirmDelete from './ConfirmDelete';
import ImageAdmin from './ImageAdmin';
import DataAdmin from './DataAdmin';

interface IModalListAdmins {
  isVisible: boolean;
  adminSelected?: IAdminInDataBase;
  handleIsOpenModal: () => void;
  handleDeleteAdmin: (id: string) => void;
}

export default function ModalListAdmins({
  handleIsOpenModal,
  isVisible,
  adminSelected,
  handleDeleteAdmin
}: IModalListAdmins) {
  const [certain, setCertain] = useState<boolean>(false);

  return (
    <Modal
      width="480px"
      handleModal={() => {
        setCertain(false);
        handleIsOpenModal();
      }}
      isVisible={isVisible}
      iconClose={true}
      contentModal={
        <div className="relative flex h-48 items-center justify-center p-4 ">
          <ImageAdmin image={adminSelected?.image} />
          <DataAdmin
            email={adminSelected?.email}
            levelAccess={adminSelected?.levelAccess}
            name={adminSelected?.name}
          />
          <ConfirmDelete
            handleDeleteAdmin={() => {
              setCertain(false);
              adminSelected?._id && handleDeleteAdmin(adminSelected?._id);
            }}
            certain={certain}
            onClick={() => setCertain(!certain)}
          />
        </div>
      }
    />
  );
}
