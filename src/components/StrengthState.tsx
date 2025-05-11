export type StrengthLevel = 0 | 1 | 2 | 3 | 4;
type StrengthStateProps = {
  strengthLevel: StrengthLevel;
};

export default function StrengthState({ strengthLevel }: StrengthStateProps) {
  const getColorClass = (level: StrengthLevel): string => {
    switch (level) {
      case 0:
        return "bg-transparent border-grey-200";
      case 1:
        return "bg-red-500 border-red-500";
      case 2:
        return "bg-orange-400 border-orange-400";
      case 3:
        return "bg-yellow-300 border-yellow-300";
      case 4:
        return "bg-green-200 border-green-200";
      default:
        return "bg-transparent border-grey-200";
    }
  };

  const getStrengthText = (level: StrengthLevel): string => {
    switch (level) {
      case 0:
        return "";
      case 1:
        return "TOO WEAK!";
      case 2:
        return "WEAK";
      case 3:
        return "MEDIUM";
      case 4:
        return "STRONG";
      default:
        return "";
    }
  };
  const colorClass = getColorClass(strengthLevel);
  const strengthText = getStrengthText(strengthLevel);
  return (
    <section className="bg-grey-850 p-4">
      <h2 className="sr-only">Password Strength</h2>
      <div className="flex items-center justify-between">
        <p className="text-preset-3 text-grey-600">STRENGTH</p>
        <div className="flex items-center gap-2">
          <p className="items-center justify-center text-preset-3 text-grey-200">
            {strengthText}
          </p>
          <ol className="flex gap-1" aria-hidden="true">
            {Array.from({ length: 4 }).map((_, index) => (
              <li
                key={index}
                className={`h-5 w-2.5 border-2 ${index < strengthLevel ? colorClass : "border-grey-200 bg-transparent"}`}
                role="presentation"
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
