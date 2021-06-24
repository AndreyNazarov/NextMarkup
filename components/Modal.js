import { useState } from "react";
import { Modal } from "react-responsive-modal";

export default function Window({ active }) {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <Modal open={active} onClose={onCloseModal} center>
      <h2>Simple centered modal</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar
        risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit
        risus, sed porttitor quam.
      </p>
    </Modal>
  );
}
