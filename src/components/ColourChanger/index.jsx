import Select from 'react-select'

export default function ColourChanger (props) {
    const handleColorChange = (selectedOption) => {
        const color = selectedOption.value;
        props.onColorChange(color);
        localStorage.setItem("backgroundColor", color);
      };

      const colorOptions = [
        { value: "#D17B88", label: "Rose" },
        { value: "#E2E4F6", label: "Lavender" },
        { value: "#BEC7A8", label: "Sage" },
        { value: "#B1CBD2", label: "Light Grey" },
        { value: "#F4C095", label: "Peach" },
        {value: '#011228', label: 'Navy'}
      ];
     
  return (
    <div className='mb-3'>
        <label htmlFor='colour-dropdown' className='form-label'>Choose background colour</label>
        <Select className="colour-dropdown form-control" options={colorOptions} onChange={handleColorChange}/>
    </div>
  )
}
