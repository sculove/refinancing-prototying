import type {SVGStyleProps} from '@financial/common-icons';

function IconCreditBenefit1({
    width = '100%',
    height = '100%',
    viewBox = '0 0 24 24',
    style = {},
}: SVGStyleProps) {
  return (
    <svg width={width} height={height} viewBox={viewBox} style={style} fill="none">
        <path d="M15.4157 8.11529C15.6286 7.93324 15.9457 7.94562 16.1438 8.14372C16.3441 8.34396 16.3543 8.66535 16.1671 8.87786L12.4791 13.0652C12.1237 13.4687 11.5014 13.4884 11.1211 13.1082C10.737 12.7241 10.7616 12.0942 11.1745 11.7413L15.4157 8.11529Z" fill="#404048"/>
            <circle cx="11.5" cy="12.7352" r="1.5" fill="#404048"/>
        <path d="M18.4895 19.0003C22.0958 15.394 22.0958 9.54713 18.4895 5.94088C14.8832 2.33462 9.03635 2.33462 5.4301 5.94088C1.82384 9.54713 1.82384 15.394 5.4301 19.0003" stroke="url(#paint0_linear_25_36430)" strokeWidth="2.2" strokeLinecap="round"/>
        <defs>
            <linearGradient id="paint0_linear_25_36430" x1="-0.384257" y1="12.7181" x2="21.3451" y2="3.65838" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0DC56C"/>
                <stop offset="1" stopColor="#09AA9E"/>
            </linearGradient>
        </defs>
    </svg>
  );
}

export default IconCreditBenefit1;
