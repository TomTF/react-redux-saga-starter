export const NAVIGATE = 'NAVIGATE';

export function navigate(path) {
    return {type: NAVIGATE, path}
}

export const NavigatorTypes = {NAVIGATE};
export const NavigatorActions = {navigate};
