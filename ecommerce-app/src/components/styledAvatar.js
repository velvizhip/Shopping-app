import styled from '@emotion/styled';
import { Avatar } from '@mui/material';

export const StyledAvatar = styled(Avatar)`
    ${({ theme }) => `
    cursor: pointer;
    background-color: ${theme.palette.primary.main};
    transition: ${theme.transitions.create(['background-color', 'transform'], {
        duration: theme.transitions.duration.standard,
    })};
    &:hover {
        background-color: ${theme.palette.secondary.main};
        transform: scale(1.3);
    }
    `}
`;  