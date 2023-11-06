/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import { React, useState } from 'react';
import { HotSale } from '../../../../services/landingData';
import Card from '../../../../components/card';
import styles from '../style.module.css';
import Modal from '../../../../components/modal/Modal';

function Ecommerce() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(false);
  const handleDivClick = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
    document.body.style.background = 'hidden'; // Disable scrolling
  };

  const closeModal = () => {
    setModalVisible(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };
  return (
    <div className={styles.container}>
      <div className="w-[100%]">
        <h2>About the eCommerce Website</h2>
        <h5 className="font-medium text-gray-200 text-[30px]">Groceries</h5>
        <p className="font-normal text-[24px]">
          {' '}
          eTranzact is your number one online shopping site in Nigeria. We are
          an online store where you can purchase all your electronics, as well
          as books, home appliances, kiddies items, fashion items for men,
          women, and children; cool gadgets, computers, groceries, automobile
          parts, and more on the go.{' '}
        </p>
      </div>
      <div className="lg:w-[1300px]">
        <div className={styles.redContainer}>
          <p>HOT SALE!!!</p>
        </div>
        <div className={styles.card}>
          {HotSale.map((item, idx) => (
            <div
              key={idx}
              className={styles.cardy}
              onClick={() => handleDivClick(item)}
            >
              <Card
                image={item.image}
                width="200px"
                text={item.text}
                price={item.price}
              />
            </div>
          ))}
        </div>
        {modalVisible && (
          <Modal closeModal={closeModal}>
            <div className="w-full">
              <h3>Product Details</h3>
              <div className="flex gap-4">
                <img src={selectedItem.image} alt="" />
                <div>
                  <p className="text-[26px] font-light lagging-[54px]">
                    20000mAh Intelligence Portable Power Bank
                  </p>
                  <div className="flex py-6 gap-3">
                    <button className="h-[41px] rounded-[5px] w-[122px]  bg-gray-300">
                      Category A
                    </button>
                    <button className="h-[41px] w-[122px]  bg-gray-300">
                      Category B
                    </button>
                  </div>
                  <h2 className="text-[40px] rounded-[5px] font-[700] lagging-[75px]">
                    Price: {selectedItem.price}
                  </h2>
                </div>
              </div>
              <div>
                <h2>Product Description</h2>
                <p>
                  Charging your smart devices just got convenient and easy with
                  this power bank Charger. It charges all battery Capacities E.g
                  3000mAh, 4000mAh, 5000mAh and 6000mAh Battery Capacities. Its
                  capacity proffers the ideal solution to the unending need for
                  longer battery power. The USB-enabled devices like mobile
                  phones, tablets, cameras and more can be charged efficiently
                  with this charger
                </p>
              </div>
              <div>
                <h2>Seller Information</h2>

                <h4>Olayinka Ibrahim James</h4>
                <div className="grid grid-cols-2">
                  <p>08123456789</p>
                  <p>109, Adeniyi Jones Avenue, Ikeja, Lagos</p>
                  <p>08088888888</p>
                  <p>69, Gods’s Glory Street, Ago-Iwoye, Ogun</p>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
}

export default Ecommerce;
