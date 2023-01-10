import React, { ReactNode } from 'react';
import { Modal } from 'antd';
import style from "./index.module.scss";

interface Props {
  children: ReactNode,
  title: string,
  open: boolean,
  setOpen: any
}

export default function ModalCustom({ title, open, setOpen, children }: Props) {

  const handleCancel = () => {
    setOpen(!open)
  }
  return (
    <Modal
      title={title}
      wrapClassName={style.modal}
      open={open}
      onCancel={handleCancel}
      width={"803px"}
      footer={null}
      closeIcon={<i className="fa-regular fa-circle-xmark" />}
    >
      {children}
    </Modal>
  )
}


