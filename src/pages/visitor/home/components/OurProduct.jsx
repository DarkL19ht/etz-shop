/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import styles from '../style.module.css';
import { Product } from '../../../../services/landingData';
import Card from '../../../../components/card';
import {
  ArrowDown,
  BestSeller,
  DPause,
  DPlay,
  Pause,
  Play,
  Toogle,
} from '../../../../assets';
import Modal from '../../../../components/modal/Modal';

function OurProduct() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(false);
  const handleDivClick = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <div className="relative">
      <div className="mb-10 flex justify-between border-b-[0.0625rem] border-gray-300 pb-1">
        <h2>Product Catalog</h2>
        <div className="flex gap-3">
          <span className="flex items-center gap-3">
            <img src={Toogle} alt="" />
            <p>Sort</p>
          </span>
          <span className="flex items-center gap-3">
            <p>Date</p>
            <img src={ArrowDown} alt="" />
          </span>
        </div>
      </div>
      <div className={styles.productCard}>
        {Product.map((item, idx) => (
          <div
            key={idx}
            className={styles.product}
            onClick={() => handleDivClick(item)}
            style={{ border: item.border ? '1px solid #BC1F27' : '' }}
          >
            {item.border && (
              <img src={BestSeller} alt="" className="absolute right-0" />
            )}
            <Card
              image={item.image}
              width="300px"
              text={item.text}
              price={item.price}
            />
          </div>
        ))}
      </div>
      <div className={styles.control}>
        <div className={styles.controldiv}>
          <img src={DPlay} alt="" className={styles.controlImage} />
        </div>
        <div className={styles.controldiv}>
          <img src={DPause} alt="" className={styles.controlImage} />
        </div>
        <span className={styles.controldiv}>1</span>
        <span className={styles.controldiv}>2</span>
        <span className={styles.controldiv}>3</span>
        <div className={styles.controldiv}>
          <img src={Pause} alt="" className={styles.controlImage} />
        </div>
        <div className={styles.controldiv}>
          <img src={Play} alt="" className={styles.controlImage} />
        </div>
      </div>
      {modalVisible && (
        <Modal closeModal={closeModal}>
          <div className="w-full">
            <h3>Product Details</h3>
            <div className="flex gap-4">
              <img src={selectedItem.image} alt="" />
              <div>
                <p className="lagging-[54px] text-[26px] font-light">
                  20000mAh Intelligence Portable Power Bank
                </p>
                <div className="flex gap-3 py-6">
                  <button className="h-[41px] w-[122px] rounded-[5px] bg-gray-300">
                    Category A
                  </button>
                  <button className="h-[41px] w-[122px]  bg-gray-300">
                    Category B
                  </button>
                </div>
                <h2 className="lagging-[75px] rounded-[5px] text-[40px] font-[700]">
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
  );
}

export default OurProduct;
