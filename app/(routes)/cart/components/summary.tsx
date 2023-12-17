// Summary.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Modal from '@/components/ui/modal';

import Button from '@/components/ui/button';
import Currency from '@/components/ui/currency';
import useCart from '@/hooks/use-cart';

interface PaymentFormData {
  nom: string;
  tele: string;
  adresse: string;
  confirmer: boolean;
}

const Summary: React.FC = () => {
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [formData, setFormData] = useState<PaymentFormData>({
    nom: '',
    tele: '',
    adresse: '',
    confirmer: false,
  });

  // State to track whether the form is complete or not
  const [isFormComplete, setIsFormComplete] = useState(false);

  useEffect(() => {
    // Check if all form fields are filled
    const formComplete = formData.nom && formData.tele && formData.adresse && formData.confirmer;
    setIsFormComplete(formComplete);
  }, [formData]);

  const totalPrice = items.reduce((total, item) => total + Number(item.price), 0);

  const onCheckout = async () => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
        productIds: items.map((item) => item.id),
        formData: {
          nom: formData.nom,
          tele: formData.tele,
          adresse: formData.adresse,
          confirmer: formData.confirmer,
        },
      });
  
      setIsPaymentModalOpen(false); // Close the modal
      toast.success("Commande confirmée avec succès!"); // Show success toast
      removeAll(); // Remove items from the cart
  
      // Optionally, you can redirect the user to a success page or handle other actions
      // Example: window.location = '/success-page';
  
    } catch (error) {
      console.error("Error confirming order:", error);
      toast.error("Une erreur s'est produite lors de la confirmation de la commande.");
    }
  };
  
  

  const onPayment = () => {
    setIsPaymentModalOpen(true);
  };

  return (
    <div className="mt-16 rounded-lg bg-white px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-black">Résumé de la commande</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-300 pt-4">
          <div className="text-base font-medium text-black">Total de la commande</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button onClick={onPayment} disabled={items.length === 0} className="w-full mt-6 bg-pink-500 text-white">
        Continuer le Paiement à la livraison
      </Button>

      {/* Payment Modal */}
      {isPaymentModalOpen && (
        <Modal open={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)}>
          <div className="p-4">
            <h2 className="text-lg font-medium text-black">Informations de commande</h2>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="nom" className="text-black">
                  Nom
                </label>
                <input
                  type="text"
                  id="nom"
                  value={formData.nom}
                  onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                  className="border rounded p-2 w-full"
                />
              </div>
              <div>
                <label htmlFor="tele" className="text-black">
                  Téléphone
                </label>
                <input
                  type="text"
                  id="tele"
                  value={formData.tele}
                  onChange={(e) => setFormData({ ...formData, tele: e.target.value })}
                  className="border rounded p-2 w-full"
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="adresse" className="text-black">
                  Adresse
                </label>
                <input
                  type="text"
                  id="adresse"
                  value={formData.adresse}
                  onChange={(e) => setFormData({ ...formData, adresse: e.target.value })}
                  className="border rounded p-2 w-full"
                />
              </div>
              <div className="col-span-2 mt-4">
                <label className="text-black">
                  <input
                    type="checkbox"
                    checked={formData.confirmer}
                    onChange={() => setFormData({ ...formData, confirmer: !formData.confirmer })}
                  />
                  {' '}
                  <span className="font-bold">Confirmer votre commande chez <span className="font-bold text-pink-500">Hijabi Style</span></span>
                </label>
              </div>
            </div>
            <div className="mt-6">
              <Button
                onClick={onCheckout}
                disabled={!isFormComplete}
                className={`bg-pink-500 text-white px-4 py-2 ${!isFormComplete && 'opacity-50 cursor-not-allowed'}`}
              >
                Confirmer la commande
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Summary;
