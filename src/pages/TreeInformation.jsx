import React, { useState } from 'react'
import Modal from '../component/Modal';
import SvgComponent from '../component/SvgComponent';

function TreeInformation() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState({});
  return (
     <div className="relative min-h-screen  flex items-center justify-center">
      <div className="relative">
        <SvgComponent setSelectedId={setSelectedId} setShowModal={setIsOpen} />
        <Modal showModal={isOpen} selectedId={selectedId} setShowModal={setIsOpen} />
      </div>
    </div>
  )
}

export default TreeInformation