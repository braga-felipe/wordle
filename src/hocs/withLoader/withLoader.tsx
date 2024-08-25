import { FC, useState } from "react";
import "../../App.css";

const withLoader =
    <T extends Object>(WrappedComponent: FC<T>): FC<T> =>
        (props) => {
            const [loading, setLoading] = useState(true);

            setTimeout(() => {
                setLoading(false);
                console.log('penes')
            }, 3000);

            return (
                <>
                    {loading ? (
                        <div className="Board">
                            <p /* style={{ color: "white" }} */>loading...</p>
                        </div>
                    ) : (
                        <WrappedComponent {...props} />
                    )}
                </>
            );
        };

export default withLoader;
