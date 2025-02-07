type WrapperSectionProps = {
  id: string;
  children: React.ReactNode;
  divider: string;
  bgColor?: string;
};

const WrapperSection = (props: WrapperSectionProps) => {
  return (
    <div
      id={props.id}
      className={`spacing-top spacing-bottom relative ${props.bgColor}`}
    >
      <div className="wrap">{props.children}</div>
      <img
        src={`./icon/${props.divider}.png`}
        alt="divider"
        className="w-full h-18 mobile:h-24 tablet:h-36 desktop:h-50 absolute -bottom-10 mobile:-bottom-15 tablet:-bottom-20 desktop:-bottom-25 z-10"
      />
    </div>
  );
};

export default WrapperSection;
