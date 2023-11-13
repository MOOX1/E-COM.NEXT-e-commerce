interface IBlurModalProps {
  isVisible: boolean;
  handleModal: () => void;
}

export const BlurModal = ({ handleModal, isVisible }: IBlurModalProps) => {
  return (
    <div
      onClick={handleModal}
      className={
        (isVisible ? 'block' : 'hidden') +
        ' absolute left-0 top-0 z-10  h-screen w-screen items-center justify-center bg-black/50 '
      }
    ></div>
  );
};
