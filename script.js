import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function FoodShareApp() {
  const [listings, setListings] = useState([
    { id: 1, type: "Surplus", item: "Rice (50kg)", location: "Nairobi", org: "Farmer Co-op" },
    { id: 2, type: "Demand", item: "Vegetables", location: "Kampala", org: "Community Kitchen" },
  ]);

  const [newItem, setNewItem] = useState("");
  const [newType, setNewType] = useState("Surplus");

  const addListing = () => {
    if (!newItem) return;
    setListings([
      ...listings,
      {
        id: listings.length + 1,
        type: newType,
        item: newItem,
        location: "Unknown",
        org: "Anonymous",
      },
    ]);
    setNewItem("");
  };

 

      <div className="grid gap-4">
        {listings.map((listing) => (
          <motion.div
            key={listing.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card>
              <CardContent className="p-4">
                <p className="font-semibold">{listing.type}: {listing.item}</p>
                <p className="text-sm text-gray-600">{listing.org} – {listing.location}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
