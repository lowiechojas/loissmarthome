import React, { useEffect, useState } from 'react'
import supabase from '../config/supabaseClient'
import Switch from '../components/Switch'

const Switches = () => {
  const [switches, setSwitches] = useState([])

  // Load data
  const fetchSwitches = async () => {
    const { data, error } = await supabase.from('switches').select('*')
    if (!error) setSwitches(data)
  }

  useEffect(() => {
    fetchSwitches()

    // 👇 Subscribe to real-time updates
    const channel = supabase
      .channel('switches-changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'switches' },
        (payload) => {
          console.log('Realtime update:', payload)
          fetchSwitches()
        }
      )
      .subscribe()

    // Cleanup
    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  // Toggle handler
  const handleToggle = async (id, newState) => {
    await supabase.from('switches').update({ status: newState }).eq('id', id)
  }

  return (
    <div>
      <h1>Switches</h1>
      {switches.map((sw) => (
        <Switch
          key={sw.id}
          label={sw.switchname}
          defaultOn={sw.status}
          onToggle={(newState) => handleToggle(sw.id, newState)}
        />
      ))}
    </div>
  )
}

export default Switches
