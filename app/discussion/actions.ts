"use server";

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export interface Topic {
  id: string;
  title: string;
  body: string;
  author: string;
  category: string;
  votes: number;
  created_at: string;
}

export async function getTopics(): Promise<Topic[]> {
  const { data, error } = await supabase
    .from("topics")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("getTopics error:", error);
    return [];
  }

  return data || [];
}

export async function createTopic(formData: {
  title: string;
  body: string;
  author: string;
  category: string;
}): Promise<Topic | null> {
  const { data, error } = await supabase
    .from("topics")
    .insert({
      title: formData.title.trim(),
      body: formData.body.trim(),
      author: formData.author.trim() || "Anonymous",
      category: formData.category,
      votes: 0,
    })
    .select()
    .single();

  if (error) {
    console.error("createTopic error:", error);
    return null;
  }

  revalidatePath("/discussion");
  return data;
}

export async function voteTopic(id: string, delta: number): Promise<number | null> {
  const { data: current } = await supabase
    .from("topics")
    .select("votes")
    .eq("id", id)
    .single();

  if (!current) return null;

  const newVotes = Math.max(0, current.votes + delta);

  const { error } = await supabase
    .from("topics")
    .update({ votes: newVotes })
    .eq("id", id);

  if (error) {
    console.error("voteTopic error:", error);
    return null;
  }

  return newVotes;
}
