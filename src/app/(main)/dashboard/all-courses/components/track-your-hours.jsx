import PlusIcon from "@/assets/SVG/PlusIcon";
import SelectOptionField from "@/components/shared/select-option-field";

const selectOption = [
  { label: "Option A", value: "valueA" },
  { label: "Option B", value: "valueB" },
  { label: "Option C", value: "valueC" },
];
export default function TrackYourHours() {
  return (
    <section data-aos="fade-up">
      <div className="container mt-8">
        <div className="mb-[30px]">
          <h2 className="text-3xl font-semibold leading-[44px] font-outfit text-foreground">
            Track your ASHA & State Hours
          </h2>
          <p className="text-base font-poppins font-normal mt-2">
            You may choose up to 6 total entities. For example, ASHA and up to 5
            state licensures. To review interstate compact information, click
            here.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <ChooseOption
            selectOption={selectOption}
            placeholder={"ASHA Certification Hours"}
            title="Choose ASHA Certification & state(s) "
          />
          <ChooseOption
            selectOption={selectOption}
            placeholder={"Choose California Certification & state(s)"}
            title="Choose California Certification & state(s)"
          />
        </div>
      </div>
    </section>
  );
}

function ChooseOption({ selectOption, placeholder, title = "No title" }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden p-6">
      <div className="flex justify-end">
        <PlusIcon />
      </div>
      <div>
        <h4 className="text-base font-outfit font-medium text-foreground mb-3">
          {title}
        </h4>
        <SelectOptionField
          selectOption={selectOption}
          placeholder={placeholder}
        />
      </div>
      <div className="py-5 px-6 bg-muted-foreground/5 rounded-2xl mt-9">
        <div className="flex items-center justify-between ">
          <p className="text-base font-normal text-muted-foreground mb-3">
            In progress
          </p>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-0.5">
              <div className="w-[5px] h-[5px] bg-destructive rounded-full"></div>
              <p className="text-[11px]">0-30%</p>
            </div>
            <div className="flex items-center gap-0.5">
              <div className="w-[5px] h-[5px] bg-warning rounded-full"></div>
              <p className="text-[11px]">31-70%</p>
            </div>
            <div className="flex items-center gap-0.5">
              <div className="w-[5px] h-[5px] bg-success rounded-full"></div>
              <p className="text-[11px]">71-100%</p>
            </div>
          </div>
        </div>
        <CustomSlider />
      </div>
    </div>
  );
}

function CustomSlider() {
  return (
    <div className="bg-white rounded-full">
      <div className="bg-gradient-to-r from-[#FF4D4D] via-[#FFA628] to-[#BFAC3B] rounded-full p-0.5 w-[50%] flex justify-end">
        <div className="h-4 w-4 rounded-full bg-white"></div>
      </div>
    </div>
  );
}
