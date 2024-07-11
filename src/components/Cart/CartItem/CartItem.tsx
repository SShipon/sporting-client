import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaMinus, FaPlus } from 'react-icons/fa';
import {
  sportingTotalPrice,
  setDecrease,
  setIncrease,
} from "@/redux/features/cartSlice";
import { Button } from "@/components/ui/button";
import { Item } from "@/types";
import { RootState } from "@/redux/hooks/store";
import { useDeleteProductMutation } from "@/redux/api/api";
import Modal from 'react-modal';


interface CartItemProps {
  item: Item;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.cart);
  const [deletedSport, { error }] = useDeleteProductMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = async () => {
    try {
      await deletedSport(item._id).unwrap();
        
      setIsModalOpen(false); // Close the modal after deletion
    } catch (error) {
      console.error('Failed to delete the product:', error);
    }
  };

  console.log(handleDelete, 'deleted sporting')

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    dispatch(sportingTotalPrice());
  }, [cart, dispatch]);

  const handleIncrease = () => {
    dispatch(setIncrease(item._id));
  };

  const handleDecrease = () => {
    dispatch(setDecrease(item._id));
  };

  return (
    <div className="flex px-2 py-4 flex-col md:flex-row justify-center items-center border-4 border-rose-23 gap-3">
      <div>
        <img className="lg:w-[180px] lg:md:w-[230px] w-[100%]" src={item.image} alt={item.name} />
      </div>
      <div>
        <h1>{item.name}</h1>
      </div>
      <div>
        <p>{item.price}</p>
      </div>
      <div>
        <p>{item.quantity}</p>
      </div>
      <div>
        <h6>{item.price * item.quantity}</h6>
      </div>
      <div className="mx-2 px-4 flex gap-2">
        <Button onClick={handleIncrease}><FaPlus /></Button>
        <Button onClick={handleDecrease}><FaMinus /></Button>
        <div className="flex items-center space-x-3">
          <Button onClick={openModal} className="bg-red-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </Button>
          <Button className="bg-primary-gradient text-xl font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </Button>
        </div>
        {error && <p className="text-red-500">Failed to delete the product!</p>}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Confirm Delete"
          className="bg-white p-4 rounded-lg shadow-lg"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <h2 className="text-xl font-semibold mb-4">
            Are you sure you want to delete this product?
          </h2>
          <div className="flex justify-end space-x-3">
            <Button onClick={closeModal} className="bg-gray-400">
              Cancel
            </Button>
            <Button onClick={handleDelete} className="bg-red-600">
              Delete
            </Button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default CartItem;
