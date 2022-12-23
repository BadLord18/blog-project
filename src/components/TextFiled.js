
const TextFiled = ({label, inputProps, onChange, value}) => {
    return(
        <div className="flex flex-col">
            <label className="mb-1 text-base text-gray-800">{label}</label>
            <input
                className="mb-5 bg-gray-200 py-2 px-3 border-2 outline-none"
                {...inputProps}
                onChange={onChange}
                value={value}
            />
        </div>
    )
}
export default TextFiled