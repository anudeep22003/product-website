const ImageWithText = () => {
    return (
        <>
            <div className="flex gap-2 ">
                <div className="flex w-1/2">
                    <img src="/sample_image.png" alt="sample" />
                </div>
                <div className="flex grow bg-slate-400 items-start p-6">
                    <ul>
                        <li className="text-2xl font-bold">A dog relaxing</li>
                        <li className="text-lg">Photo by: John Doe</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ImageWithText;
