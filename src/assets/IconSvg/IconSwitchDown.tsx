import type {SVGStyleProps} from '@financial/common-icons';

function IconSwitchDown({
    fill = '#09aa5c',
    width = '100%',
    height = '100%',
    viewBox = '0 0 13 11',
    style = {},
}: SVGStyleProps) {
    return (
        <svg width={width} height={height} viewBox={viewBox} style={style} fill="none">
            <rect x="3.14258" width="6.28571" height="7.85714" rx="0.3" fill={fill} />
            <path d="M6.47904 10.8368C6.36729 10.9311 6.20386 10.931 6.09211 10.8368L0.627182 6.22571C0.413427 6.04536 0.540967 5.69643 0.820643 5.69643L11.7505 5.69643C12.0302 5.69643 12.1578 6.04536 11.944 6.22572L6.47904 10.8368Z" fill={fill}/>
    </svg>
    );
}

export default IconSwitchDown;
