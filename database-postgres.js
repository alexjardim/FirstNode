import { randomUUID } from "node:crypto"
import { sql } from './db.js'
import { supabase } from "./db.js"
import { title } from "node:process"

export class DatabasePostgres {
    async list(search) {

        let videos        
        
        if (search) {
            videos = await supabase
            .from('videos')
            .select('*')
            .ilike('title', `${'%' + search + '%'}`)
        } else {
            videos = await supabase.from('videos').select('*')
        }

        return videos
    }

    async create(video) {
        const videoID = randomUUID()
        const { title, description, duration } = video

        await supabase.from('videos').insert({
            id: videoID,
            title: title,
            description: description,
            duration: duration
        }).select()
    }

    async update(id, video) {
        const { data, error } = await supabase
        .from('videos')
        .update({
            title: video.title,
            description: video.description,
            duration: video.duration
        })
        .eq('id', id)
        .select()
    }

    async delete(id) {
        await supabase.from('videos')
        .delete()
        .eq('id', id)
        .select()
    }

}