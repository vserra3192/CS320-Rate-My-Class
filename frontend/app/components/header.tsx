"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";

type Profile = {
  full_name: string | null;
  role: "student" | "professor";
};

export function Header({ professor = false }: { professor?: boolean }) {
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileAreaRef = useRef<HTMLDivElement>(null);
  const signInHref = {
    pathname: "/auth",
    query: { next: pathname },
  };
  const signUpHref = {
    pathname: "/auth",
    query: {
      mode: "signup",
      next: pathname,
    },
  };

  useEffect(() => {
    const supabase = createClient();
    let isMounted = true;
    let profileRequest = 0;

    async function loadProfile(userId: string) {
      const requestId = ++profileRequest;
      const { data } = await supabase
        .from("profiles")
        .select("full_name, role")
        .eq("id", userId)
        .maybeSingle();

      if (isMounted && requestId === profileRequest) setProfile(data as Profile | null);
    }

    supabase.auth.getUser().then(({ data }) => {
      if (!isMounted) return;
      setUser(data.user);
      if (data.user) void loadProfile(data.user.id);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      const currentUser = session?.user ?? null;
      setUser(currentUser);
      setProfile(null);
      profileRequest += 1;
      if (currentUser) setTimeout(() => void loadProfile(currentUser.id), 0);
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!profileOpen) return;

    function closeOnOutsideClick(event: MouseEvent) {
      if (event.target instanceof Node && !profileAreaRef.current?.contains(event.target)) {
        setProfileOpen(false);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setProfileOpen(false);
    }

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [profileOpen]);

  const email = user?.email ?? "";
  const nameFromMetadata = typeof user?.user_metadata?.full_name === "string"
    ? user.user_metadata.full_name
    : "";
  const displayName = profile?.full_name?.trim() || nameFromMetadata.trim() || email.split("@")[0] || "Account";
  const initials = displayName
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  async function signOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    setProfileOpen(false);
  }

  return (
    <header className="bg-white border-[#dde4dc] border-b border-solid content-stretch flex h-[88px] items-center justify-between overflow-visible px-[64px] relative shrink-0 w-full" data-node-id="25:4" data-name="Navigation">
      <Link href="/" aria-label="Rate My Class home" className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-node-id="25:5" data-name="Brand">
        <div className="bg-[#16734c] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[36px]" data-node-id="25:6" data-name="Brand mark">
          <div className="relative shrink-0 size-[24px]" data-node-id="25:884" data-name="graduation-cap">
            <Image alt="" width={24} height={24} className="absolute block inset-0 max-w-none size-full" src={professor ? "/figma/df7df.svg" : "/figma/7e2f8.svg"} unoptimized />
          </div>
        </div>
        <p className="[word-break:break-word] font-bold leading-[normal] not-italic relative shrink-0 text-[#18332b] text-[22px] whitespace-nowrap" data-node-id="25:8">
          RATE MY CLASS
        </p>
      </Link>

      <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-node-id="25:18" data-name="Account actions">
        {user ? (
          <div className="relative" ref={profileAreaRef}>
            <button
              type="button"
              className="flex size-[44px] cursor-pointer items-center justify-center rounded-full border-2 border-[#d7e6dc] bg-[#eaf3ec] text-[14px] font-bold text-[#16734c] transition-colors hover:bg-[#dceee1]"
              aria-label={`Open profile for ${displayName}`}
              aria-expanded={profileOpen}
              aria-controls={profileOpen ? "profile-menu" : undefined}
              onClick={() => setProfileOpen((open) => !open)}
            >
              {initials || "?"}
            </button>
            {profileOpen && (
              <section id="profile-menu" className="absolute right-0 top-[calc(100%+12px)] z-50 w-[min(320px,90vw)] rounded-[12px] border border-[#dde4dc] bg-white p-[18px] shadow-[0px_12px_32px_0px_rgba(24,51,43,0.16)]" aria-label="User profile">
                <p className="truncate text-[15px] font-semibold leading-5 text-[#18332b]">{displayName}</p>
                <p className="mt-1 truncate text-[12px] leading-4 text-[#7b8981]">{email}</p>
                <div className="my-[14px] border-t border-[#edf0eb]" />
                <p className="text-[13px] text-[#506158]">
                  Role: <span className="font-semibold text-[#18332b]">
                    {profile?.role ? profile.role[0].toUpperCase() + profile.role.slice(1) : "Not available"}
                  </span>
                </p>
                <button type="button" onClick={signOut} className="mt-[16px] w-full rounded-[7px] px-3 py-2 text-left text-[13px] font-semibold text-[#16734c] hover:bg-[#f2f7f2]">
                  Sign out
                </button>
              </section>
            )}
          </div>
        ) : (
          <>
            <Link href={signInHref} className="[word-break:break-word] font-semibold leading-[normal] not-italic relative shrink-0 text-[#18332b] text-[14px] whitespace-nowrap" data-node-id="25:19">
              Sign in
            </Link>
            <Link href={signUpHref} className="bg-[#16734c] border border-[#16734c] border-solid content-stretch flex h-[42px] items-center justify-center overflow-clip px-[18px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-node-id="25:20" data-name="Action">
              <span className="[word-break:break-word] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="25:21">
                Create account
              </span>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
