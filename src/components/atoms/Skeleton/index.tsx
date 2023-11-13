interface ISkeletonProps {
  width: string;
  height: string;
  quantityColumn: number;
  quantityRow: number;
  circle?: boolean;
  indexCircle?: number;
  borderButton?: boolean;
}

export default function Skeleton({
  height,
  quantityColumn,
  quantityRow,
  width,
  circle = false,
  indexCircle,
  borderButton,
}: ISkeletonProps) {
  const border = borderButton ? 'border-solid border-mainBlue/20 border-b' : '';

  return (
    <>
      {[...Array(quantityRow)].map((_, index) => (
        <div
          key={index}
          style={{ borderBottom: border }}
          className={`flex flex-col  p-2 ` + border}
        >
          <div className="flex w-full justify-between">
            {[...Array(quantityColumn)].map((_, index) => (
              <div key={index} className="flex w-full justify-between">
                {circle && index === indexCircle && (
                  <div className="flex w-full justify-center">
                    <div
                      style={{ width: height, height: height }}
                      className={`animate-pulse  rounded-full bg-slate-700`}
                    ></div>
                  </div>
                )}
                {!circle || indexCircle !== index ? (
                  <div
                    style={{ width: width, height: height }}
                    className={` animate-pulse  rounded bg-slate-700`}
                  ></div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
