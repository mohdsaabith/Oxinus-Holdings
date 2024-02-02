import React from "react";
import { Select, Button, Input, DatePicker, Modal, Breadcrumb } from "antd";
import type { DatePickerProps } from "antd";
import { MdOutlineFileDownload } from "react-icons/md";
import { LuPrinter } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import dayjs from "dayjs";

export default function Index() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [datePickerValue, setDatePickerValue] =
    React.useState<DatePickerProps>();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div className="bg-white mb-5 rounded-[8px] p-5 shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-3">
          <div>
            <Select
              size="large"
              placeholder="Device Type"
              style={{ width: 150 }}
              onChange={handleChange}
              options={[
                { value: "iphone", label: "iPhone" },
                { value: "samsung", label: "Samsung" },
              ]}
            />
          </div>
          <div>
            <Input size="large" placeholder="Enter device name here" />
          </div>

          <div>
            <DatePicker
              onChange={onChange}
              size="large"
              value={dayjs(datePickerValue)}
              onSelect={(value) => setDatePickerValue(value)}
            />
          </div>

          <div>
            <Button size="large" className="text-black border border-black">
              Search
            </Button>
          </div>
        </div>

        <div className="flex justify-center items-center gap-3">
          <div>
            <Button
              size="large"
              className="text-[#0D8182] border border-[#0D8182] gap-1 flex justify-center items-center"
            >
              <MdOutlineFileDownload />
              Export
            </Button>
          </div>
          <div>
            <Button
              size="large"
              className="text-[#0D8182] border border-[#0D8182] gap-1 flex justify-center items-center"
            >
              <LuPrinter /> Print
            </Button>
          </div>
          <div>
            <Button
              onClick={showModal}
              size="large"
              className="flex justify-center items-center bg-[#0D8182] text-white gap-1"
            >
              <FaPlus /> Register New Device
            </Button>

            <Modal
              footer={false}
              title={
                <>
                  Register New Device
                  <div className="text-[#8B8BA2] text-[11px] font-normal">
                    We will sent a verification code to the email address.
                  </div>
                </>
              }
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <Breadcrumb
                separator="->"
                items={[
                  {
                    title: "1. Device Details",
                  },
                  {
                    title: "2. Generate Key Pairs",
                    href: "",
                  },
                  {
                    title: "3. Download Key Pairs",
                    href: "",
                  },
                ]}
              />

              <div className="h-[25rem] flex flex-col justify-between">
                <div className="grid grid-cols-3 gap-4 mt-5">
                  <div>
                    <div className="text-[11px] mb-1 text-[#8B8BA2]">
                      Device Type<span className="text-[#DB3840]">*</span>
                    </div>
                    <Select
                      size="middle"
                      placeholder="Device Type"
                      defaultValue={"appleiOS"}
                      className="w-full"
                      onChange={handleChange}
                      options={[
                        { value: "appleiOS", label: "Apple iOS" },
                        { value: "andriod", label: "Android" },
                      ]}
                    />
                  </div>

                  <div className="col-span-2">
                    <div className="text-[11px] mb-1 text-[#8B8BA2]">
                      Device Name<span className="text-[#DB3840]">*</span>
                    </div>
                    <Input size="middle" value="spotlight-device-ap" />
                  </div>

                  <div className="col-span-3">
                    <div className="text-[11px] mb-1 text-[#8B8BA2]">
                      Serial No
                    </div>
                    <Input
                      size="middle"
                      value="ABC1234XYZ5678PQR90122384723984798243A"
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center mt-3 pb-0">
                  <Button
                    size="large"
                    className="text-red-800 border border-red-800  flex justify-center items-center"
                  >
                    *Cancel
                  </Button>

                  <Button
                    onClick={showModal}
                    size="large"
                    className="flex justify-center items-center bg-[#0D8182] text-white gap-1"
                  >
                    Generate Key Pairs
                  </Button>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
