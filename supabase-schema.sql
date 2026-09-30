-- ============================================================================
-- HAFEEZ TOY STORE — SUPABASE DATABASE SCHEMA & RLS POLICIES
-- Run this in your Supabase SQL Editor (Project: mlvtisgkahbkffjcwkam)
-- ============================================================================

-- 1. PRODUCTS TABLE
CREATE TABLE IF NOT EXISTS public.products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    sku TEXT UNIQUE NOT NULL,
    category TEXT NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    discount_price NUMERIC(10, 2),
    stock INTEGER NOT NULL DEFAULT 10,
    image_url TEXT,
    description TEXT,
    rating NUMERIC(2, 1) DEFAULT 5.0,
    reviews_count INTEGER DEFAULT 0,
    badge TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. ORDERS TABLE
CREATE TABLE IF NOT EXISTS public.orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_ref TEXT UNIQUE NOT NULL,
    customer_name TEXT NOT NULL,
    customer_email TEXT,
    customer_phone TEXT,
    customer_location TEXT,
    product_name TEXT NOT NULL,
    amount NUMERIC(10, 2) NOT NULL,
    payment_method TEXT DEFAULT 'Cash on Delivery (COD)',
    status TEXT DEFAULT 'Pending',
    tracking_number TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. INQUIRIES (CONTACT US) TABLE
CREATE TABLE IF NOT EXISTS public.inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. NEWSLETTER SUBSCRIBERS TABLE
CREATE TABLE IF NOT EXISTS public.subscribers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    subscribed_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================================
-- ENABLE ROW LEVEL SECURITY (RLS) & POLICIES
-- ============================================================================

ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read on products" ON public.products FOR SELECT USING (true);
CREATE POLICY "Allow public insert on products" ON public.products FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update on products" ON public.products FOR UPDATE USING (true);
CREATE POLICY "Allow public delete on products" ON public.products FOR DELETE USING (true);

CREATE POLICY "Allow public read on orders" ON public.orders FOR SELECT USING (true);
CREATE POLICY "Allow public insert on orders" ON public.orders FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update on orders" ON public.orders FOR UPDATE USING (true);

CREATE POLICY "Allow public insert on inquiries" ON public.inquiries FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public read on inquiries" ON public.inquiries FOR SELECT USING (true);

CREATE POLICY "Allow public insert on subscribers" ON public.subscribers FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public read on subscribers" ON public.subscribers FOR SELECT USING (true);

-- ============================================================================
-- SEED TOY PRODUCTS (PKR CURRENCY)
-- ============================================================================

INSERT INTO public.products (name, sku, category, price, discount_price, stock, image_url, description, rating, reviews_count, badge)
VALUES 
('High-Speed RC Monster Truck 4WD', 'HTS-RC-01', 'Remote Control Toys', 4999.00, 3499.00, 28, 'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=700&q=80', 'Heavy duty 1:16 scale all-terrain monster truck with 2.4GHz remote control, rechargeable lithium battery, and 30 km/h top speed.', 4.9, 84, 'BESTSELLER'),
('Die-Cast Luxury Supercar Fleet (Pack of 5)', 'HTS-CAR-02', 'Cars & Vehicles', 2800.00, 2199.00, 45, 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=700&q=80', 'Premium metal die-cast 1:32 scale model cars with opening doors, pull-back action, realistic engine sounds, and LED headlights.', 4.8, 62, 'HOT DEAL'),
('Princess Dream Villa Wooden Dollhouse', 'HTS-DOL-03', 'Dolls', 8500.00, 6499.00, 12, 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=700&q=80', '3-story fully furnished wooden princess dollhouse with 14 miniature furniture accessories and LED light strip.', 5.0, 39, 'PREMIUM'),
('Ultimate Superhero Avengers Action Figure Set', 'HTS-ACT-04', 'Action Figures', 3800.00, 2999.00, 35, 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=700&q=80', 'Set of 6 articulated 7-inch superhero figures featuring light-up chest repulsors and weapon accessories.', 4.9, 110, 'POPULAR'),
('Smart Robotic STEM Building & Coding Kit', 'HTS-EDU-05', 'Educational Toys', 6200.00, 4899.00, 20, 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=700&q=80', 'Educational 12-in-1 solar and battery powered robotic engineering kit.', 4.9, 53, 'STEM CHOICE'),
('Master Business & Strategy Board Game', 'HTS-BRD-06', 'Board Games', 1800.00, 1399.00, 50, 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=700&q=80', 'Exciting property trading board game featuring Pakistani cities and currency for memorable family nights.', 4.7, 75, 'FAMILY FUN'),
('Giant 3-Foot Jumbo Fluffy Teddy Bear', 'HTS-SFT-07', 'Soft Toys', 4500.00, 3299.00, 25, 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=700&q=80', 'Ultra-soft, huggable giant 3-foot teddy bear made from premium hypoallergenic velvet plush.', 4.9, 98, 'CUDDLE BEST'),
('3-Wheel Foldable Light-Up Kids Kick Scooter', 'HTS-OUT-08', 'Outdoor Toys', 5500.00, 4199.00, 30, 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=700&q=80', 'Lean-to-steer technology with motion-powered LED flashing wheels and adjustable handlebar.', 4.8, 47, 'TOP OUTDOOR')
ON CONFLICT (sku) DO NOTHING;
