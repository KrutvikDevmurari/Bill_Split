import { FC, useState } from 'react'

interface InputProps {
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    value: string | number,
    placeholder?: string | number,
}

const Input: FC<InputProps> = ({ value, onChange, placeholder }) => {

    const [isFocused, setIsFocused] = useState(false);
    const handleInputFocus = () => {
        setIsFocused(true);
    };

    const handleInputBlur = () => {
        setIsFocused(false);
    };

    return <div className="relative">
        <input
            className={` appearance-none border-2 border-gray-200 rounded w-full  px-4 text-gray-700 leading-tight focus:outline-none focus:border-[#e33b5a] py-4`}
            id="inline-full-name"
            type="text"
            value={value}
            onChange={onChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
        />
        <label
            htmlFor="inline-full-name"
            className={`absolute left-4 ${isFocused || value ? '-top-[0px] text-[12px]' : 'top-4 '} ${isFocused ? "text-[#e33b5a]" : "text-gray-400"} transition-all duration-300 pointer-events-none`}
        >
            {placeholder}
        </label>
    </div>
}

export default Input