import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export const showToast = {
  success(message) {
    toast.success(message, {
      position: "top-right",
      autoClose: 4000,
      theme: "colored",
    });
  },

  warning(message) {
    toast.warning(message, {
      position: "top-right",
      autoClose: 4000,
      theme: "colored",
    });
  },

  error(message) {
    toast.error(message, {
      position: "top-right",
      autoClose: 4000,
      theme: "colored",
    });
  },
};