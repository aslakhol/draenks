type ModalContentProps = {};

const ModalContent = (props: ModalContentProps) => {
  const {} = props;

  return (
    <p className="text-sm text-gray-500">
      Are you sure you want to deactivate your account? All of your data will be
      permanently removed. This action cannot be undone.
    </p>
  );
};

export default ModalContent;
