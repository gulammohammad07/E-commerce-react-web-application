import { useEffect, useRef, useState } from "react";
import dropin from "braintree-web-drop-in";
import {
  getClientToken,
} from "../../Services/api";

const Checkout = () => {
  const [clientToken, setClientToken] = useState("");

  const dropinContainer = useRef(null);


  useEffect(() => {
    const loadToken = async () => {
      try {
        const res = await getClientToken();
        setClientToken(res.clientToken);
      } catch (err) {
        console.error(err);
      }
    };

    loadToken();
  }, []);

 useEffect(() => {
  if (!clientToken || !dropinContainer.current) return;

  let dropinInstance;

  dropin.create(
    {
      authorization: clientToken,
      container: dropinContainer.current,
    },
    (error, createdInstance) => {
      if (error) {
        console.error("DropIn Error:", error);
        return;
      }

      console.log("DropIn Created");
      dropinInstance = createdInstance;
    }
  );

  return () => {
    if (dropinInstance) {
      dropinInstance.teardown();
    }
  };
}, [clientToken]);
}
export default Checkout;