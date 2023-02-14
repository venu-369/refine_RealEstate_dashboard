import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";


export const Title: React.FC<TitleProps> = ({ collapsed }) => {
    const { Link } = useRouterContext();

    return (
        <Button fullWidth variant="text" disableRipple>
            <Link to="/">
                {collapsed ? (
                    <img src="https://i.pinimg.com/564x/af/95/fe/af95fee66ac7ea2aeeb516ab670e782b.jpg" alt="logo" width="28px" height="30px" />
                ) : (
                    <img src="https://i.pinimg.com/564x/af/95/fe/af95fee66ac7ea2aeeb516ab670e782b.jpg" alt="Refine" width="14px" />
                )}
            </Link>
        </Button>
    );
};
