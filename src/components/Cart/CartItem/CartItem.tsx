import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { RootState } from '@/redux/hooks/store';
import { updateCartItem, decreaseQuantity, increaseQuantity } from '@/redux/features/cartSlice';
import Modal from 'react-modal';
import { useDeleteProductMutation } from '@/redux/api/api';
import { Item } from '@/types';

interface CartItemProps {
  item: Item;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.cart);
  const [deleteFromCartMutation, { error }] = useDeleteProductMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedItem, setUpdatedItem] = useState<Item>({ ...item });

  const handleDelete = async () => {
    try {
      await deleteFromCartMutation(item._id).unwrap();
      setIsModalOpen(false); // Close the modal after deletion
    } catch (error) {
      console.error('Failed to delete the product:', error);
    }
  };

  const handleUpdate = () => {
    dispatch(updateCartItem(updatedItem ));
    setIsModalOpen(false); // Close the modal after updating
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUpdatedItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleIncrease = () => {
    dispatch(increaseQuantity(item._id));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(item._id));
  };

  useEffect(() => {
    // Recalculate total price when cart changes
    // Example: dispatch(sportingTotalPrice());
  }, [cart, dispatch]);

  const confirmDelete = () => {
    return window.confirm('Are you sure you want to delete this product?');
  };

  const handleDeleteButtonClick = () => {
    if (confirmDelete()) {
      handleDelete();
    }
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
            Edit
          </Button>
        </div>
        {error && <p className="text-red-500">Failed to delete the product!</p>}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Edit Product"
          className="bg-white p-4 rounded-lg shadow-lg"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <h2 className="text-xl font-semibold mb-4">
            Edit Product
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={updatedItem.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                id="price"
                name="price"
                value={updatedItem.price}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            {/* Add other fields like description, category, etc. here */}
          </div>
          <div className="flex justify-end mt-4">
            <Button onClick={handleUpdate} className="bg-blue-600 text-white px-4 py-2 rounded">
              Update
            </Button>
          </div>
        </Modal>
        <Button onClick={handleDeleteButtonClick}>Delete</Button>
      </div>
    </div>
  );
};

export default CartItem;
