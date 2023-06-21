import Modal from '@/components/Modal';
import { AdminInDataBase } from '@/types/admins';
import { useState } from 'react';
import ConfirmDelete from './ConfirmDelete';
import ImageAdmin from './ImageAdmin';
import DataAdmin from './DataAdmin';

interface ModalListAdmins {
  isVisible: boolean;
  adminSelected?: AdminInDataBase;
  handleIsOpenModal: () => void;
  handleDeleteAdmin: (id: string) => void;
}

export default function ModalListAdmins({
  handleIsOpenModal,
  isVisible,
  adminSelected,
  handleDeleteAdmin
}: ModalListAdmins) {
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
            handleDeleteAdmin={() =>
              adminSelected?._id && handleDeleteAdmin(adminSelected?._id)
            }
            certain={certain}
            onClick={() => setCertain(!certain)}
          />
        </div>
      }
    />
  );
}
